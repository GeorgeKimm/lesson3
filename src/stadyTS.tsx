export {};

// TypeScript
const year: number = 45;
const float: number = 25.5;
const isOpen: true = true;
const numberArray: string[] = ["hello", "world"];

// массивы
let arr = [];
arr = [1, ""];
let numbers: number[] = [1, 2];
// numbers = [5, ""]// error
let arr2: (number | string)[] = [1, ""];

// Tuple(кортеж)
const contact: [string, number] = ["john", 777];

// Any
let variable: any = 567;
variable = "now string";

// функция
function sayName(name: string): void {
  console.log(name);
}

sayName("Lise");

// never (допустим на случай ошибки или бесконечно цикла и прочее)
function Mistake(data: string): never {
  throw new Error(data);
}

function isFinite(): never {
  while (true) {
    console.log("hello");
  }
}

// создание собственных типов
type ID = number | string;
const id1: ID = 5;
const id2: ID = "25";
// const id3: ID = true; //здесь будет ругаться

type M = { a: string } | { b: number };
let m: M = { a: "" }; // работает
m = { b: 4 }; // работает
m = { a: "", b: 5 }; // работает
// m = { a: "", b: 5, c: "error" }; // ошибка

// супер штука, как ты хотел
type someType = string | null | undefined;

// пересечение типов
type N = { a: string } & { b: string }; // т.е. свойства обоих объектов должно присутствовать
let n: N = { a: "", b: "" }; // только при таком условии будет работать

// свойство in
if ("b" in n) {
  console.log("there is b");
} else {
  console.log("noooo");
}

// Создания интерфейса(по сути это создание специального типа для функций или классов,
// где можно указать какие свойства, методы должны быть у объектов)
interface Rect {
  readonly id: string; // модификатор readonly указывает, что данное поле только для чтения, т.е. его нельзя будет изменить
  color?: string; // знак вопроса указывает, что этот параметр необязателен
  size: {
    width: number;
    height: number;
  };
}

// интерфейсы с одинаковым именем объединяются
interface Rect {
  sayHello(): void;
}

const rect1: Rect = {
  id: "hello",
  size: {
    width: 45,
    height: 20,
  },
  sayHello(): void {
    console.log("hello");
  },
};
// касательно того, что это константа
// typeScript работает, как и js(т.е. мы можем менять внутреннее состояние,
// но вот внешне присваивать другое значения нельзя)
rect1.color = "green";

// еще можно указать к какому типу будет относиться объект
const rect2 = {} as Rect;
// ----------------------------------------------------------------------------------

// наследование интерфейсов
// внутри добавили метод(стрелочную функцию которая должна возвращать тип number)
interface ReactWithArea extends Rect {
  getArea: () => number;
}

const react3: ReactWithArea = {
  id: "123",
  size: {
    width: 20,
    height: 20,
  },

  getArea(): number {
    return this.size.width * this.size.height;
  },

  sayHello(): void {
    console.log("hello");
  },
};

// ----------------------------------------------------------------------------------
// имплементация класса от интерфейса
interface Iclock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements Iclock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}

// ----------------------------------------------------------------------------------
// создание интерфейса для объекта с большим количеством динамических ключей
interface Styles {
  [key: string]: string; // в квадратных скобках указывается тип ключа с помощью ключевого слова key
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px",
};

// ----------------------------------------------------------------------------------
// enum(вспомогатьная сущность, которая помогает структурировать код, если допустим присутствуют однотипные элементы)
enum Membership {
  Simple, // по умолчанию 0
  Standart, // по умолчанию 1
  Premium, // по умолчанию 2 (принцип как индексы в массивах)
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];
console.log(membership); // 1
console.log(membershipReverse); // Premium

enum SocialMedia {
  VK = "VK",
  FB = "FACEBOOK",
}

const socialVK = SocialMedia.VK;
console.log(socialVK); // VK

// ----------------------------------------------------------------------------------
// Функции
function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}

// вызов функций с разными параметрами и возвращение разных значений(по умному называется "перегрузка")
interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number): MyPosition | MyPositionWithDefault {
  if (!a && !b) {
    return {
      x: undefined, // кстати undefined здесь это не тип, а значение
      y: undefined,
    };
  }

  if (a && !b) {
    return {
      x: a,
      y: undefined,
      default: a.toString(),
    };
  }

  return {
    x: a,
    y: b,
  };
}

console.log("empty", position());
console.log("one param", position(42));
console.log("two param", position(10, 15));

// ----------------------------------------------------------------------------------
// Работа с классами
class TypeScript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `${name}: typescript version is ${this.version}`;
  }
}

class Car {
  readonly model: string; // модификатор readonly указывает что данное свойство не будет перезаписоваться
  readonly number: number = 4;

  constructor(theModel: string) {
    this.model = theModel; // внутри конструктора можно перезаписать readonly, в других методах нельзя
  }
}
// более короткая, но полностью идентичная запись
// class Car {
//   readonly number: number = 4
//   constructor(readonly model: string) {}
// }

// Модификаторы полей
class Animal {
  constructor(name: string) {
    this.name = name;
  }

  name: string;

  protected voice: string = ""; // свойство доступно внутри класса и для наследуемых объектов
  public color: string = "black"; // данный модификатор стоит на свойсвах по умолчанию

  private go() {
    // доступны только внутри данного класса
    console.log("go");
  }
}

class Rabbit extends Animal {
  age: number;

  constructor(name: string, age: number) {
    super(name);
    this.age = age;
  }

  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const rabbit = new Rabbit("mr white", 4);
// console.log(rabbit.voice) // так делать нельзя потому-что protected voice
console.log(rabbit.color); // black
console.log(rabbit.age); // 4

// Generic
// создадим тип А, и скажем что он будет обобщен неким другим типом
// обычно указывается одной буквой T
type A<T> = T;
// теперь создадим тип B и укажем, что это тип А(внутрь которого передадим string)
type B = A<string>; // type B = string
type C = A<"hello">; // type C = "hello"
type D = A<number>; // type D = number

type MyArray<T> = T[];
const array: MyArray<string> = ["hello", "typescipt"];

// создание обобщенной функции, входной параметр будет иметь тип Т, и затем этот тип будет возвращаться
function echo<T>(x: T): T {
  return x;
}

const testGeneric = echo("hello type");
// наведи на testGeneric и увидешь, что данная переменная имеет тип 'hello type', это означает что данной переменной можно присвоить только строку 'hello type' и ничего другого

// обрати внимание на запись <T,> запятая ставится только в tsx файлах, в обычном ts было бы так <T>
const echo2 = <T,>(x: T): T => {
  return x;
};

const testGeneric2 = echo2("hello type");

// можно даже указать тип для echo(все что слева от знака равно)
// но это не часто используется
const echo3: <T>(x: T) => T = <T,>(x: T): T => {
  return x;
};

const testGeneric3 = echo3("hello type");
const testGeneric4 = echo3<string>("hello type");

// обобщение класса
class List1<T> {
  elements: T[] = [];

  add(element: T) {
    this.elements.push(element);
  }
}

const list1 = new List1<string>();
list1.add("hello");

// обобщение интерфейсов
interface IList<T> {
  elements: T[];
  add(element: T): void;
}

class List2 implements IList<string> {
  elements: string[] = [""];

  add(element: string) {
    this.elements.push(element);
  }
}

const list2 = new List2();
list2.add("hello");
list2.add("man");

type P<T extends string> = T;
type Ptest1 = P<string>;
type Ptest2 = P<"hello">;
// type Ptest3 = P<5>// error

type L<T> = T extends string ? string : never;
type Ltest1 = L<string>; // string
type Ltest2 = L<"hello">; // string
type Ltest3 = L<5>; // never

// T расширяется от объект, у которого есть name типа string
function PrintName<T extends { name: string }>(person: T) {
  console.log(person.name);
}
PrintName({ name: "john", age: 25 });

// этот объект можно записать через интерфейс
interface IName {
  name: string;
}

function PrintName2<T extends IName>(person: T) {
  console.log(person.name);
}

PrintName2({ name: "john", age: 25 });

interface Test {
  a: string;
  b: number;
  c: boolean;
}

type test = keyof Test;

function getProperty<objectType, KeyType extends keyof objectType>(
  object: objectType,
  key: KeyType
) {
  return object[key];
}

const result = getProperty({ name: "john", age: 23 }, "name");
