const people = [
    {name: '짱구', age:25},
    {name: '철수', age:30},
    {name: '유리', age:10}
    ];

const older=people.filter(people=>people.age>=20);
console.log(older);