//this simple program will count the number of vowels in a phrase. accounts for upper and lowercase vowels.

function numOfVowels(str) {
    let vowelAmount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']

    for (let letter of str) {
        if (vowels.includes(letter.toLowerCase())) {
            vowelAmount++
        }
    }
    return `${vowelAmount} vowels.`
}

// numOfVowels('The somber American songbird rests beyond the horizon.')  => '16 vowels.'