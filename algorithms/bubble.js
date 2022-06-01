async function bubble(){

    const val = document.querySelectorAll(".sort");

    for(let i = 0; i < val.length - 1; ++i)
    {
        for(j = 0; j < val.length - i - 1; ++j)
        {
            val[j].style.background='red';
            val[j + 1].style.background='red';

            if(parseInt(val[j].style.height) > parseInt(val[j + 1].style.height))
            {
                await delay(time);
                swap(val[j], val[j + 1]);
            }

            val[j].style.background='yellow';
            val[j + 1].style.background='yellow';
        }

        val[val.length - i - 1].style.background='green';
    }
    val[0].style.background='green';
}

document.getElementById('bubble').addEventListener("click", async function(){
    disableSizeSlider();
    disableSortingBtn();
    await bubble();
    enableSizeSlider();
    enableSortingBtn();
});

