import * as React from 'react';

const BoozeForm =()=> {

    const handleSubmit = (event:any)=> {
        console.log(event);
      }

    return <form onSubmit={handleSubmit}>
    <label>
    Name: <input type="text" name="name"/>
    </label>
    <label>
    Ph: <input type="number" name="ph"/>
    </label>
    <label>
    Volume: <input type="number" name="volume"/>
    </label>
    <label>
    Alcohol: <input type="number" name="alcohol"/>
    </label>
    <input type="submit" value="Submit"/>
    </form>
}

export default BoozeForm;