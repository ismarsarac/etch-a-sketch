const container=document.querySelector('#grid-container');

function makeRows(gridNum){
    let gridArea=gridNum*gridNum;
    for (c=0;c<(gridArea);c++){
        let cell = document.createElement('div');
        container.style.gridTemplateColumns=`repeat(${gridNum},1fr)`;
        container.style.gridTemplateRows=`repeat(${gridNum},1fr)`;
        // cell.innerText=(c+1);
        container.appendChild(cell).className='grid-item';
    };
};
makeRows(16);

