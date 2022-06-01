async function selection(){
    const val = document.querySelectorAll('.sort');
    for(let i = 0; i < val.length; i++)
    {
        let x = i;
        val[i].style.background = 'red';
        for(let j = i + 1; j < val.length; j++)
        {
            val[j].style.background = 'red';
            if(parseInt(val[j].style.height) < parseInt(val[x].style.height))
            {
                if(x !== i)
                {
                    val[x].style.background = 'yellow';
                }
                x = j;
            }

            else
            {
                val[j].style.background = 'yellow';
            }
        }
        await delay(time);
        swap(val[i],val[x]);
        val[x].style.background = 'yellow';
        val[i].style.background = 'green';
    }
}

document.getElementById("selection").addEventListener('click', async function(){
    disableSizeSlider();
    disableSortingBtn();
    await selection();
    enableSizeSlider();
    enableSortingBtn();
});