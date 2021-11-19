const KEYS = {
    crops: 'livestocks',
    cropId: 'livestockId'
}

export const getStageCollection = () => ([
    { id: '1', title: 'Conception' },
    { id: '2', title: 'Birth' },
    { id: '3', title: 'Weaning' },
    { id: '4', title: 'Growth to Market Weigth' },
    { id: '5', title: 'Sexual Maturity' },
    { id: '6', title: 'Gestation' },
    { id: '7', title: 'Parturition' }
    
])


export function getAllLivestocks() {
    if (localStorage.getItem(KEYS.livestocks) == null)
        localStorage.setItem(KEYS.livestocks, JSON.stringify([]))
    let livestocks = JSON.parse(localStorage.getItem(KEYS.livestocks));
    
    let stages = getStageCollection();
    return livestocks.map(x => ({
        ...x,
        stage: stages[x.stageId - 1]
    }))
}

export function generateLivestockId() {
    if (localStorage.getItem(KEYS.livestockId) == null)
        localStorage.setItem(KEYS.livestockId, '0')
    var id = parseInt(localStorage.getItem(KEYS.livestockId))
    localStorage.setItem(KEYS.livestockId, (++id).toString())
    return id;
}

export function addLivestock(data){

    let livestocks = getAllLivestocks();
    data['id'] = generateLivestockId()
    livestocks.push(data)
    localStorage.setItem(KEYS.livestocks, JSON.stringify(livestocks))
}

export function updateLivestock(data) {

    let livestocks = getAllLivestocks();
    let recordIndex = livestocks.findIndex( x => x.id === data.id);
    livestocks[recordIndex] = { ...data }
    localStorage.setItem(KEYS.livestocks, JSON.stringify(livestocks));
}

export function deleteLivestock(id){

    let livestocks = getAllLivestocks();
    livestocks  = livestocks.filter(x => x.id !== id);
    localStorage.setItem(KEYS.livestocks, JSON.stringify(livestocks))
}