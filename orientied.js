class Person {
    books;
    staff;
    openHours;

constructor(books,staff,openHours) {
    this.books = books;
    this.staff = staff;
    this.openHours = openHours;
    
}

 getbooks() {
    return this.books
    
 }

 getstaff() {
    return this.staff
    
 }

 getopenHours() {
    return this.openHours
    
 }
}

