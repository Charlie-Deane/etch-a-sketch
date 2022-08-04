class EtchBoardObject
{
    constructor(lambda)
    {
        if(typeof(lambda) == "number")
        {
            this.X = lambda;
            this.Y = lambda;
        }
        else
        {
            this.X = lambda.X;
            this.Y = lambda.Y;
            this.undoBoard = lambda;
        }
    }
    debugBoard()
    {
        console.log(this);
    }
    drawBoard()
    {
    }
}

class ColorPalletteObject
{
    constructor()
    {
        //set default colors
        this.color_1 = '#000000';
        this.color_2 = '#464646';
        this.color_3 = '#787878';
        this.color_4 = '#b4b4b4';
        this.color_5 = '#dcdcdc';
        this.color_6 = '#ffffff';
        this.color_7 = '#990030';
        this.color_8 = '#9c5a3c';
        this.color_9 = '#ed1c24';
        this.color_10 = '#ffa3b1';
        this.color_11 = '#ff7e00';
        this.color_12 = '#e5aa7a';
        this.color_13 = '#ffc20e';
        this.color_14 = '#f5e49c';
        this.color_15 = '#fff200';
        this.color_16 = '#fff9bd';
        this.color_17 = '#a8e61d';
        this.color_18 = '#d3f9bc';
        this.color_19 = '#22b14c';
        this.color_20 = '#9dbb61';
        this.color_21 = '#00b7ef';
        this.color_22 = '#99d9ea';
        this.color_23 = '#4d6df3';
        this.color_24 = '#709ad1';
        this.color_25 = '#2f3699';
        this.color_26 = '#546d8e';
        this.color_27 = '#6f3198';
        this.color_28 = '#b5a5d5';
        
        //place all default colors in array
        this.colorArray =
        [
            this.color_1,
            this.color_2,
            this.color_3,
            this.color_4,
            this.color_5,
            this.color_6,
            this.color_7,
            this.color_8,
            this.color_9,
            this.color_10,
            this.color_11,
            this.color_12,
            this.color_13,
            this.color_14,
            this.color_15,
            this.color_16,
            this.color_17,
            this.color_18,
            this.color_19,
            this.color_20,
            this.color_21,
            this.color_22,
            this.color_23,
            this.color_24,
            this.color_25,
            this.color_26,
            this.color_27,
            this.color_28
        ];
    }
    debugColors()
    {
        console.log(this);
    }
    linkPallette(className)
    {
        const container = document.querySelectorAll(className);
        console.log(container);
        container.forEach( (box) =>{
            let boxID = box.id;
            let index = boxID.replace(/\D/g, '');
            index = Number(index) - 1;
            box.setAttribute('style', `background-color: ${this.colorArray[index]};`);
        })
    }
}

class BrushObject
{
}

function brushObject(size)
{

}

colorPallette = new ColorPalletteObject();
etchBoard = new EtchBoardObject(128);
//colorPallette.debugColors();
//etchBoard.debugBoard();
colorPallette.linkPallette(".colorHolder");