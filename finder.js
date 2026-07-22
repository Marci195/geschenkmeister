(() => {
  const form = document.getElementById('gift-finder');
  const results = document.getElementById('finder-results');
  const list = document.getElementById('finder-result-list');
  if (!form || !results || !list) return;

  const ideas = [
    {title:'Die 1%-Methode', person:['mann','frau','partner','eltern'], occasion:['geburtstag','abschluss','einfach'], budget:['unter25','25-50'], interest:['buecher','entwicklung'], url:'die-1-prozent-methode-geschenk.html', text:'Motivierender Bestseller mit persönlichem Nutzen.'},
    {title:'iPhone 15', person:['mann','frau','partner'], occasion:['geburtstag','weihnachten','abschluss'], budget:['ueber100'], interest:['technik'], url:'iphone-15-geschenk.html', text:'Hochwertiges Technikgeschenk für langfristige Nutzung.'},
    {title:'Samsung Galaxy S26', person:['mann','frau','partner'], occasion:['geburtstag','weihnachten','abschluss'], budget:['ueber100'], interest:['technik'], url:'samsung-galaxy-s26-geschenk.html', text:'Premium-Android-Gerät für Technikfans.'},
    {title:'Praktisches Heimwerker-Geschenk', person:['mann','eltern'], occasion:['geburtstag','weihnachten','einzug'], budget:['unter25','25-50'], interest:['heimwerken'], url:'heimwerker-geschenke.html', text:'Nützliche Idee für Menschen, die gerne selbst anpacken.'},
    {title:'Bücher als Geschenk', person:['mann','frau','partner','eltern'], occasion:['geburtstag','weihnachten','einfach','abschluss'], budget:['unter25','25-50'], interest:['buecher','entwicklung'], url:'buecher-als-geschenk.html', text:'Persönliche Buchideen nach Interesse und Anlass.'},
    {title:'Geschenkideen nach Budget', person:['mann','frau','partner','eltern'], occasion:['geburtstag','weihnachten','einzug','einfach'], budget:['unter25','25-50','50-100','ueber100'], interest:['offen'], url:'geschenkideen-budget.html', text:'Orientierung für jedes Budget und verschiedene Interessen.'}
  ];

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const person = data.get('person');
    const occasion = data.get('occasion');
    const budget = data.get('budget');
    const interest = data.get('interest');
    const ranked = ideas.map((idea) => {
      let score = 0;
      if (idea.person.includes(person)) score += 3;
      if (idea.occasion.includes(occasion)) score += 3;
      if (idea.budget.includes(budget)) score += 2;
      if (idea.interest.includes(interest)) score += 4;
      if (interest === 'offen') score += 1;
      return {...idea, score};
    }).sort((a,b) => b.score - a.score).slice(0,3);

    list.innerHTML = ranked.map((idea) => `
      <article class="finder-result">
        <span class="tag">Passende Idee</span>
        <h3>${idea.title}</h3>
        <p>${idea.text}</p>
        <a href="${idea.url}">Geschenkidee ansehen →</a>
      </article>`).join('');
    results.classList.add('is-visible');
    results.scrollIntoView({behavior:'smooth', block:'nearest'});
  });
})();
