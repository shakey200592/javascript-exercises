const repeatString = function(string,numRepeat) 
{
    if (numRepeat < 0)
    {
        return "ERROR";
    }
    let newString = ''
    for(let i =0; i <numRepeat; i++)
    {
        newString += string
    }

    return newString;
};

// Do not edit below this line
module.exports = repeatString;
