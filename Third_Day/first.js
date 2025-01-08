function sum(a)
{
    let ans = a;
    function sum2(b)
    {
        if(b == undefined)
        {
            return ans;
        }
        ans += b;
        return sum2;
    }
    return sum2;
}
console.log(sum(1)(2)(3)());