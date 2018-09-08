var catalog = {
    'wear' : [
        {
            'name' : "кофта",
            'minSize' : "xxxs",
            'maxSize' : "xxxl",
            'price' : 1000
        },
        {
            'name' : "футболка",
            'minSize' : "xxs",
            'maxSize' : "xxl",
            'price' : 500
        }
    ],
    'shoes' : [
        {
            'name' : "ботинки",
            'minSize' : "38",
            'maxSize' : "45",
            'price' : 1500
        },
        {
            'name' : "кроссовки",
            'minSize' : "35",
            'maxSize' : "42",
            'price' : 2000
        }
    ]
};

document.getElementById("button").onclick = function() {
    new Controller().setResultValue(
        new Calculator().calculate()
    );
};

