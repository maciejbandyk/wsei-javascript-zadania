function countHello(number) {
    let t = 1;
    const a = setInterval(() => {
        if (t==number) clearInterval(a);
        console.log("hello ", t);
        t++;
    }, 1000);

}

const number = 10;
countHello(number);