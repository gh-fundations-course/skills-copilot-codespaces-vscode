function skillsMember(){
    var skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Python', 'Ruby', 'Java', 'C++', 'Go', 'C#', 'Rust', 'Swift', 'Kotlin', 'Scala', 'Haskell'];
    var randomSkill = skills[Math.floor(Math.random() * skills.length)];
    console.log(randomSkill);
}