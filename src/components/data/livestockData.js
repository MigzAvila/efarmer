const KEYS = {
    livestocks: 'livestocks',
    livestockId: 'livestockId'
}

export const getStageCollection = () => ([
    { id: '1', title: 'Conception' },
    { id: '2', title: 'Birth' },
    { id: '3', title: 'Weaning' },
    { id: '4', title: 'Growth to Market Weight' },
    { id: '5', title: 'Sexual Maturity' },
    { id: '6', title: 'Gestation' },
    { id: '7', title: 'Parturition' }
    
])

export const getSpeciesCollection = () => ([
    { id: '1', title: 'Cow' },
    { id: '2', title: 'Chicken' },
    { id: '3', title: 'Pig' },
    { id: '4', title: 'Horse' },
    { id: '5', title: 'Sheep' },
    { id: '6', title: 'Goat' },
    { id: '7', title: 'Duck' },
    { id: '7', title: 'Turkey' },
    
])

export const getBreedCollection = () => ([
    { id: '1', title: 'Angus Cow' },
    { id: '2', title: 'Braham Cow' },
    { id: '3', title: 'Beef Master Cow' },
    { id: '4', title: 'Piedmontese Cow' },
    { id: '5', title: 'Herefordshire Cow' },
    { id: '6', title: 'Gelbvieh Cow' },
    { id: '7', title: 'Silkie Chicken' },
    { id: '8', title: 'Sussex Chicken' },
    { id: '9', title: 'Brahma Chicken' },
    { id: '10', title: 'Orpington Chicken' },
    { id: '11', title: 'Indian Chicken' },
    { id: '12', title: 'Duroc Pig' },
    { id: '13', title: 'Large White Pig' },
    { id: '14', title: 'Berkshire Pig' },
    { id: '15', title: 'Danish LandRace Pig' },
    { id: '16', title: 'Gloucester Old Spots' },
    { id: '17', title: 'Arabian Horse' },
    { id: '18', title: 'Friesian Horse' },
    { id: '19', title: 'Appaloosa Horse' },
    { id: '20', title: 'Shire Horse' },
    { id: '21', title: 'Mustang Horse' },
    { id: '22', title: 'Dorper Sheep'},
    { id: '23', title: 'Merino Sheep'},
    { id: '24', title: 'Texel Sheep'},
    { id: '25', title: 'Boer Goat'},
    { id: '26', title: 'American Pygmy Goat'},
    { id: '27', title: 'Saanen Goat'},
    { id: '28', title: 'Angora Goat'},
    { id: '29', title: 'American Pekin Duck'},
    { id: '30', title: 'Call Duck'},
    { id: '31', title: 'Magpie Duck'},
    { id: '32', title: 'Acona Duck'},
    { id: '33', title: 'Bronze Turkey'},
    { id: '34', title: 'Norfolk Turkey'},
    { id: '35', title: 'Bourbon Red Turkey'},
    { id: '36', title: 'Royal Palm Turkey'},
    { id: '37', title: 'White Holland Turkey'},

    

    
])

export function getAllLivestocks() {
    console.log(JSON.stringify(getSpeciesCollection()))
    if (localStorage.getItem(KEYS.livestocks) == null)
        localStorage.setItem(KEYS.livestocks, JSON.stringify([]))
    let livestocks = JSON.parse(localStorage.getItem(KEYS.livestocks));
    
    let stages = getStageCollection();
    let breeds = getBreedCollection();
    let speciess = getSpeciesCollection();
   
   
    return livestocks.map(x => ({
        ...x,
        stage: stages[x.stageId - 1].title,
        breed: breeds[x.breedId - 1],
        species : speciess[x.speciesId - 1]
        
        
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