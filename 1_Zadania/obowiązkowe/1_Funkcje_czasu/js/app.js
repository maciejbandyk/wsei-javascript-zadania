function countHello(number) {
    let t = 1;
    const a = setInterval(() => {
        if (t==number) clearInterval(a);
        console.log("hello ", t);
        t++;
    }, 1000);

}

countHello(3);