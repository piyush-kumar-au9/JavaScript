function jsEngine(code){
    return code.split(/\s+/);
}

jsEngine("var a = 5");
// O/p ---> ['var', 'a', '=', '5']