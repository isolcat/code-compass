//父方法
function SupperFunction(flag1) {
    this.flag1 = flag1;
}

//子方法
function SubFunction(flag2) {
    this.flag2 = flag2;
}

//父实例
var superInstance = new SupperFunction(true);

//子继承父
SubFunction.prototype = superInstance;

//子实例
var subInstance = new SubFunction(false);
//子调用自己和父的属性
subInstance.flag1;   // true
subInstance.flag2;   // false