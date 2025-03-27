function solution(str1, str2) {
    const createMultiset = (str) => {
        const multiset = []
        const regex = /^[A-Za-z]{2}$/
        
        for(let i=0; i<str.length; i++) {
            const pair = str.substr(i, 2).toLowerCase()
            if(regex.test(pair)) {
                multiset.push(pair)
            }
        }
        return multiset
    }
    
    
    const getIntersectionSize = (arr1, arr2) => {
        const map = new Map()
        let size = 0
        
        for(const elem of arr1) {
            map.set(elem, (map.get(elem) || 0) +1)
        }
        
        for(const elem of arr2) {
            if(map.get(elem) && map.get(elem) > 0) {
                size++
                map.set(elem, map.get(elem) -1)
            }
        }
        return size
    }
    
    
  const multiset1 = createMultiset(str1);
  const multiset2 = createMultiset(str2);
    
  if (multiset1.length === 0 && multiset2.length === 0) {
    return 65536;
  }
    
      const intersectionSize = getIntersectionSize(multiset1, multiset2);
    
    const unionSize = multiset1.length + multiset2.length - intersectionSize
    
    return Math.floor((intersectionSize / unionSize) * 65536);
}