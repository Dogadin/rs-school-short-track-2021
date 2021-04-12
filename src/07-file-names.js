/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const map = new Map();
  const ret = names.map((value) => {
    const count = map.has(value) ? map.get(value) : 0;
    map.set(value, count + 1);
    const retValue = count === 0 ? value : `${value}(${count})`;
    map.set(retValue, 1);
    return retValue;
  });
  return ret;
}

module.exports = renameFiles;
