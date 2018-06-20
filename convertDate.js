/**
 * @author Eduardo_Costa
 * Created_at 04/2018
 *
 * #Portuguese:
 * Recebe uma data, identifica se está no formato legível ou
 * se esta no formato de banco, edita a mesma e retorna seu inverso:
 * SE em formato de banco(2018-12-31) retorna em formato legível(31/12/2018)
 * SE em formato legível(31/12/2018) retorna em formato de banco(2018-12-31)
 *
 * #English
 * If stay in DB format(2018-12-31) return on readable format(31/12/2018)
 * If stay on readable format return on DB format
 *
 */
export default function convertDate(date) {

  if (!date) return null;

  let pointer = '';

  let segmentedDate = date.replace('/', '.');
  segmentedDate = segmentedDate.replace('/', '.');
  segmentedDate = segmentedDate.replace('-', '.');
  segmentedDate = segmentedDate.replace('-', '.');

  segmentedDate = segmentedDate.split('.');

  if (segmentedDate[0].length <= 2) {
    pointer = '-';
  } else {
    pointer = '/';
  }

  return segmentedDate[2] + pointer + segmentedDate[1] + pointer + segmentedDate[0];

}
