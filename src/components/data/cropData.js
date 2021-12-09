const KEYS = {
    crops: 'crops',
    cropId: 'cropId'
}

export const getStageCollection = () => ([
    { id: '1', title: 'Preparation of Soil' },
    { id: '2', title: 'Sowing' },
    { id: '3', title: 'Adding manures / fertilizers' },
    { id: '4', title: 'Irrigation' },
    { id: '5', title: 'Weeding' },
    { id: '6', title: 'Harvesting' },
    { id: '7', title: 'Threshing' },
    { id: '8', title: 'Storage' },
])

export const getCropCollection = () => ([

    // { id: '1' , label: 'Corn'},
    // { id :'2', label: 'Bean' },
    // {  id : '3', label: 'Rice'  },

    { id: '1', title: 'Corn' },
    { id: '2', title: 'Bean' },
    { id: '3', title: 'Rice' },
    { id: '4', title: 'Onion' },
    { id: '5', title: 'Tomatoe' },
    { id: '6', title: 'Sweet Pepper' },
    { id: '7', title: 'Potato' },
    { id: '8', title: 'Carrot' },
])


export function getAllCrops() {
    if (localStorage.getItem(KEYS.crops) == null)
        localStorage.setItem(KEYS.crops, JSON.stringify([]))
    let crops = JSON.parse(localStorage.getItem(KEYS.crops));
    console.log('f')
    let stages = getStageCollection();
    let croptypes = getCropCollection();
    return crops.map(x => ({
        ...x,
        stage: stages[x.stageId - 1].title,
        croptype : croptypes[x.croptypeId - 1].title
    }))
}

export function generateCropId() {
    if (localStorage.getItem(KEYS.cropId) == null)
        localStorage.setItem(KEYS.cropId, '0')
    var id = parseInt(localStorage.getItem(KEYS.cropId))
    localStorage.setItem(KEYS.cropId, (++id).toString())
    return id;
}

export function addCrop(data){

    let crops = getAllCrops();
    data['id'] = generateCropId()
    crops.push(data)
    localStorage.setItem(KEYS.crops, JSON.stringify(crops))
}

export function updateCrop(data) {

    let crops = getAllCrops();
    let recordIndex = crops.findIndex( x => x.id === data.id);
    crops[recordIndex] = { ...data }
    localStorage.setItem(KEYS.crops, JSON.stringify(crops));
}

export function deleteCrop(id){

    let crops = getAllCrops();
    crops  = crops.filter(x => x.id !== id);
    localStorage.setItem(KEYS.crops, JSON.stringify(crops))
}