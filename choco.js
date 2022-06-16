function GetCountChoco(count_dollars)
{
    count_choco = count_dollars;
    count_wrapper = count_choco;
    
    while(count_wrapper >= 3)
    {
        count_wrapper -= 3;// buy a chocolate bar for 3 wrappers
        count_choco++;// add bought chocolate
        count_wrapper++;// add wrapper from this chocolate
    }
    
    return count_choco;
}

console.log(GetCountChoco(5))
