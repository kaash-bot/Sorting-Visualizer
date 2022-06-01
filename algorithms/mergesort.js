async function merge(val,low,mid,high){
    const n1 = mid - low + 1;
    const n2 = high - mid;

    let left = new Array(n1);
    let right = new Array(n2);
    
    for(let i = 0; i < n1; ++i)
    {
        await delay(time);
        val[ low + i].style.background='orange';
        left[i] = val[low + i].style.height;
    }

    for(let j = 0; j < n2; ++j)
    {
        await delay(time);
        val[mid + 1 + j].style.background='red';
        right[j]=val[mid + 1 + j].style.height;
    }

    // await delay(50);
    let i = 0, j = 0, k = low;

    while(i < n1 && j < n2)
    {
        await delay(time);
        if(parseInt(left[i]) <= parseInt(right[j]))
        {
            if((n1 + n2) == val.length)
            {
                val[k].style.background = 'green';
            }
            else
            {
                val[k].style.background = 'light green';
            }
            val[k].style.height = left[i];
            i++;
            k++;
        }

        else
        {
            if((n1 + n2) == val.length)
            {
                val[k].style.background = 'green';
            }

            else
            {
                val[k].style.background = 'light green';
            }
            val[k].style.height = right[j];
            j++;
            k++;
        }
    }

    while(i<n1)
    {
        await delay(time);
        if((n1+n2)==val.length)
        {
            val[k].style.background='green';
        }

        else
        {
            val[k].style.background='light green';
        }
        val[k].style.height=left[i];
        i++;
        k++;
    }

    while(j<n2)
    {
        await delay(time);
        if((n1+n2) == val.length)
        {
            val[k].style.background='green';
        }

        else
        {
            val[k].style.background='light green';
        }
        val[k].style.height=right[j];
        j++;
        k++;
    }
}

async function mergeSort(val,l,r){
    if(l>=r)
    {
        return;
    }
    const m=l+Math.floor((r-l)/2);
    await mergeSort(val,l,m);
    await mergeSort(val,m+1,r);
    await merge(val,l,m,r);
}

document.getElementById('merge').addEventListener('click',async function(){
    let val=document.querySelectorAll('.sort');
    let l=0;
    let r=parseInt(val.length)-1;
    disableSizeSlider();
    disableSortingBtn();
    await mergeSort(val,l,r);
    enableSizeSlider();
    enableSortingBtn();
});