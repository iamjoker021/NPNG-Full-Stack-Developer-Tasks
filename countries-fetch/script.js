const DEFAULT_COUNTRY = 'United States of America';

const fetchContry = async (name) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,flags,currency,population,currencies`);

    if (response.ok) {
        const data = await response.json();
        return data;
    }
    else {
        return null;
    }
}

const createSearch  = () => {
    const inpCont = document.createElement('div');
    inpCont.classList.add('searchbar');

    const inp = document.createElement('input');
    inp.type = 'text';
    inp.placeholder = 'Enter Correct Country Name. Default: America';
    inp.value = DEFAULT_COUNTRY;
    inpCont.appendChild(inp);

    const btn = document.createElement('button');
    btn.textContent = 'Search';
    btn.onclick = async () => {
        const resultCont = document.querySelector('.result');

        // Cleanup
        while (resultCont.firstChild) {
            resultCont.removeChild(resultCont.firstChild);
        }

        const name = document.querySelector('input').value || DEFAULT_COUNTRY;
        const result = await fetchContry(name.toLowerCase());

        if (result) {
            for (const country of result) {
                const resultCard = createResultCard(country);
                resultCont.appendChild(resultCard);
            }
        }
        else {
            const result = await fetchContry(DEFAULT_COUNTRY);

            const error = document.createElement('p');
            error.textContent = 'No result found for given Country Name. hence returning Default Value';
            resultCont.appendChild(error);

            for (const country of result) {
                const resultCard = createResultCard(country);
                resultCont.appendChild(resultCard);
            }
        }
        
    }
    inpCont.appendChild(btn);

    return inpCont;
}

const createResultCont = () => {
    const resultCont = document.createElement('div');
    resultCont.classList.add('result');
    return resultCont;
}

const createResultCard = (result) => {
    const cont = document.createElement('div');

    const img = document.createElement('img');
    img.src = result.flags.png;
    cont.appendChild(img);

    const name = document.createElement('h2');
    name.textContent = result.name.official;
    cont.appendChild(name);

    const population = document.createElement('p');
    population.textContent = `Populatuion: ${result.population}`;
    cont.appendChild(population);

    const currencyList = document.createElement('ul');
    cont.appendChild(currencyList);

    for (const el of Object.values(result.currencies)) {
        const curreny = document.createElement('li');
        curreny.innerHTML = `Currency Name: ${el.name}`;
        currencyList.appendChild(curreny);
    }

    return cont;
}

const body = document.querySelector('body');

body.appendChild(createSearch());
body.appendChild(createResultCont());

document.querySelector('button').click();