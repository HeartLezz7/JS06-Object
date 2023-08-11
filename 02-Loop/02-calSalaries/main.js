let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

function isEmptyObj (obj) {
    let isEmpty = true;
    for (let key in obj) {
        isEmpty = false;
    }
    return isEmpty;
}

function calSalaries (Object) {

    // 1.Validate
    if (isEmptyObj(Object)) return 0;
    // 2.calculate
    let sumSalaries = 0;
    for (let key in Object){
        sumSalaries += Object[key];
    }
    return sumSalaries;
}