async function insertion(){
    const val=document.querySelectorAll('.sort');

    val[0].style.background='green';
    for(let i=1; i<val.length; i++)
    {
        val[i].style.background='red';
        let key=val[i].style.height;
        let j=i-1;

        while(j>=0 && (parseInt(key)<parseInt(val[j].style.height)))
        {
            val[j].style.background='red';
            val[j+1].style.height=val[j].style.height;
            j--;
            
            await delay(time);
            for(let k=0; k<i; k++)
            {
                val[k].style.background='green';
            }
        }

        val[j+1].style.height=key;
        val[i].style.background='green';
    }
}

document.getElementById('insertion').addEventListener('click',async function(){
    disableSizeSlider();
    disableSortingBtn();
    await insertion();
    enableSizeSlider();
    enableSortingBtn();
});