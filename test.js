var people = ['layne','cris','iran','claire','irving','fiona','phil','elliot','cyrus','adam','xinlai','yancey'];

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
shuffle(people);


console.log(people[0]);