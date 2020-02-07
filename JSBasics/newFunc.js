/**
 * 实现 new
 * @param {Function} fn 
 * @param {arguments} args 
 */
function _new(fn, args) {
    let obj = Object.create(fn.prototype);
    let ret = fn.apply(obj, ...args);
    return ret instanceof 'object' ? ret : obj;
}