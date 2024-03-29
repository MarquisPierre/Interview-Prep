var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }

    let sMap = {}
    let tMap = {}

    for(let i = 0; i < s.length; i++){
        if (s[i] in sMap)
            sMap[s[i]]++
        } else{
            sMap[s[i]] = 1
        }

        if (t[i] in tMap)
            tMap[t[i]]++
        } else{
            tMap[t[i]] = 1
        }
    }


    
      for (let k in sMap) {
        if (sMap[k] !== tMap[k]) {
            return false
        }
      }
      return true
    
};


console.log(isAnagram("anagram", "nagaram"));
