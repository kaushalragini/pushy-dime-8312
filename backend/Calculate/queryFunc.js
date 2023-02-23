function checkgtlt(str) {
  if (str.includes("_gte")) {
    return false;
  } else if (str.includes("_lte")) {
    return false;
  } else if (str.includes("_gt")) {
    return false;
  } else if (str.includes("_lt")) {
    return false;
  } else {
    return true;
  }
}

function changetoArray(obj) {
  let filter = [];
  let operatorArr = [];
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      //* if more than two filters are there then there will be an array
      //*   {title: {$in: ['True Spirit', 'Empire of Light', 'Infiesto']}}

      filter.push({ [key]: { $in: obj[key] } });
    } else if (
      key != "page" &&
      key != "limit" &&
      key != "sort" &&
      checkgtlt(key) &&
      key != "q"
    ) {
      filter.push({ [key]: obj[key] });

      //* =>   {brand: "Amiri"}
    } else if (checkgtlt(key) === false) {
      let keyValArr = key.split("_");
      operatorArr.push({
        [keyValArr[0]]: { operator: keyValArr[1], val: +obj[key] },

        //* price_lte=50 => [price: {operator: lte, val: 50}]
      });
    }
  }
  return {
    filter,
    operatorArr,
  };
}

module.exports = {
  changetoArray,
};
