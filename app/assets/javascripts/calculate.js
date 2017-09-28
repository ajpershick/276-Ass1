
var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,
              49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

var val1=0;
var val2=0;
var val3=0;
var val4=0;
var val5=0;
var val6=0;
var val7=0;
var val8=0;
var val9=0;
var val10=0;
var val11=0;

// Stores input from text box into a var

function getData(parameter)
{
    return document.getElementById(parameter).value;
}

function push(x, y)
{
    document.getElementById(x).innerHTML = y;

}

// Stores number of each range in each var (val#)

function calculate()
{
    var Max = getData('Max');
    var aPlus = getData('A+');
    var a = getData('A');
    var aMinus = getData('A-');
    var bPlus = getData('B+');
    var b = getData('B');
    var bMinus = getData('B-');
    var cPlus = getData('C+');
    var c = getData('C');
    var cMinus = getData('C-');
    var d = getData('D');
    var f = getData('F');
    var i;
    val1='';
    val2='';
    val3='';
    val4='';
    val5='';
    val6='';
    val7='';
    val8='';
    val9='';
    val10='';
    val11='';

    for (i=0; i < grades.length; i++) {
        console.log(grades[i]);
        if (grades[i] >= aPlus)
            val1 += 'O';
        else if (grades[i] >= a)
            val2 += 'O';
        else if (grades[i] >= aMinus)
            val3 += 'O';
        else if (grades[i] >= bPlus)
            val4 += 'O';
        else if (grades[i] >= b)
            val5 += 'O';
        else if (grades[i] >= bMinus)
            val6 += 'O';
        else if (grades[i] >= cPlus)
            val7 += 'O';
        else if(grades[i] >= c)
            val8 += 'O';
        else if (grades[i] >= cMinus)
            val9 += 'O';
        else if (grades[i] >= d)
            val10 += 'O';
        else if (grades[i] <= f)
            val11 += 'O';
    }
    push('hist1', val1);
    push('hist2', val2);
    push('hist3', val3);
    push('hist4', val4);
    push('hist5', val5);
    push('hist6', val6);
    push('hist7', val7);
    push('hist8', val8);
    push('hist9', val9);
    push('hist10', val10);
    push('hist11', val11);
}



function write(val)
{
    document.write(val);
}

