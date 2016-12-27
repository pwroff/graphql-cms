/**
 * Created by Leonid on 26/12/16.
 */

const wsClient = () => {
    this.on('mutate', (data)=>{

    });
    this.on('receive', function(data){});
    this.on('disconnect', () => {
        delete this;
    });
};

export default wsClient;
