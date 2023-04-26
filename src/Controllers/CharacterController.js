export class CharacterController {
    getCharacters(setCharacters, setPagination, query = '', page = 1) {
        fetch(`https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`)
            .then((response) => response.json())
            .then((result) => {
            const characterResult = result;
            setCharacters(characterResult.results);
            setPagination(characterResult.info);
        });
    }
}
