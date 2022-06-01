async function lomuto(val, l, h){
    let i = l-1;
    
    val[h].style.background='red';
    for(let j = l; j <= h - 1; ++j)
    {
        val[j].style.background = 'brown';
        await delay(time);
        if(parseInt(val[j].style.height) < parseInt(val[h].style.height))
        {
            if(i >= l)
            {
                val[i].style.background = 'yellow';
            }
            i++;
            swap(val[i], val[j]);
            val[i].style.background='orange';
            await delay(time);
        }
        val[j].style.background = 'yellow';
    }
    if(i >= l){
        val[i].style.background = 'yellow';
    }

    await delay(time);
    swap(val[i+1], val[h]);
    
    val[h].style.background = 'yellow';
    
    await delay(time);      
        return i + 1;
    }
    
    async function qsort(val,l,h){
        
        if(l<h){
        let p=await lomuto(val,l,h);
        await qsort(val,l,p-1);
        await qsort(val,p+1,h);
    }
    
    else{
        return;
    }
}

document.getElementById('quick').addEventListener('click', async function(){
    let val=document.querySelectorAll('.sort');
    let l=0;
    let h=parseInt(val.length)-1;
    disableSizeSlider();
    disableSortingBtn();
    await qsort(val,l,h);
    for(let i=0; i<=h; i++)
    {
        await delay(time);
        val[i].style.background='green';
    }
    enableSizeSlider();
    enableSortingBtn();
});