const { execSync } = require('child_process');
const oracledb = require('oracledb');

// Configuración de la conexión a la base de datos Oracle
const dbConfig = {
  user: 'talento',             // Reemplaza por el nombre de usuario de tu base de datos
  password: 'talento',   // Reemplaza por la contraseña de tu base de datos
  connectString: '10.1.140.101:1521/db106'// Reemplaza por la cadena de conexión de tu base de datos
};

function adjustToColombiaTimeZone(date) {
  const colombiaTimeZoneOffset = -5; // Colombia timezone offset in hours (GMT-5)
  return new Date(date.getTime() + colombiaTimeZoneOffset * 60 * 60 * 1000);
}

async function insertCommitToDb(commitId, author, date, log, changedFiles) {
  const connection = await oracledb.getConnection(dbConfig);
  console.log('Insertando commit en la base de datos...');
  try {
    const commitDate = adjustToColombiaTimeZone(new Date(date)).toISOString();
    const sql = `INSERT INTO TALENTO.SVN_COMMITS (commit_id, author, commit_date, commit_message, changed_files) VALUES (:commit_id, :author, TO_TIMESTAMP(:commit_date, 'YYYY-MM-DD"T"HH24:MI:SS.FF3"Z"'), :commit_message, :changed_files)`;
    await connection.execute(sql, {
      commit_id: commitId,
      author,
      commit_date: commitDate,
      commit_message: log,
      changed_files: changedFiles
     
    });
    await connection.commit();
    console.log('Commit insertado correctamente en la base de datos.');
  } catch (err) {
    console.error(`Error al insertar el commit en la base de datos: ${err.message}`);
  } finally {
    await connection.close();
  }
}

// Obtener detalles del último commit desde el repositorio remoto

const repoUrl = 'http://adacsc.co:1443/svn/repository/ADA/IMPLANTACION/TNS%20names%20actualizados/';
const logXml = execSync(`svn log -l 1 --xml "${repoUrl}"`).toString();
const commitId = logXml.match(/<logentry\s+revision="(\d+)"/)[1];
const author = logXml.match(/<author>(.*?)<\/author>/)[1].trim();
const date = logXml.match(/<date>(.*?)<\/date>/)[1].trim();
const log = logXml.match(/<msg>([\s\S]*?)<\/msg>/)[1].toString().trim();
const comId = parseInt(commitId);
const changedFilesCmd = `svn diff --summarize -c ${commitId} "${repoUrl}"`;
const changedFiles = execSync(changedFilesCmd)
  .toString();



// Llamada a la función insertCommitToDb con los detalles del commit
insertCommitToDb(comId, author, date, log, changedFiles);
