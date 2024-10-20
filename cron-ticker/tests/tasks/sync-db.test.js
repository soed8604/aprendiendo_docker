const { syncDB } = require("../../tasks/sysnc-db");

describe('Pruebas en Sync-DB', () =>{

    test('Debe de ejecutar el proceso 2 veces', () => {
        
        syncDB();
        const times = syncDB();
        console.log('Se llamo', times);

        expect(times).toBe( 2 );
    });

});