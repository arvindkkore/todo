import React, { Component } from 'react';
import { logRoles } from '@testing-library/react';

class Todo extends Component {  
    state = {edit: false,
        id: null,
        mockData: [{id: '1',title: 'Buy Milk',status: 'new'},
                     {id: '2',title: 'Meeting with Ali',status: 'new'},
                     {id: '3',title: 'Tea break',status: 'new', }, 
                     {id: '4', title: 'Go for a run.',status: 'new'}],
                        itemName :""

                    
            }

     add = (e) =>{        
         if(this.state.id){            
              const  mockData = [...this.state.mockData];              
              const items = mockData.filter(item => item.id === this.state.id);    
              const index = mockData.indexOf(items[0]);
              console.log(index);
              mockData[index].title = this.state.itemName;
              this.setState({mockData});
              this.setState({itemName:'',id:null});  
         }else{
            if(this.state.itemName.length>0) {
                this.setState({ mockData: [...this.state.mockData, {  id:this.state.mockData.length+1,title: this.state.itemName,status: 'new'}]  });    
                this.setState({itemName:'',id:null});             
               }  
         }
         
         };  
        edit = (id,name) =>{        
            this.setState({itemName:name,id});  
        };     
        delete = (id) =>{        
              const  data = [...this.state.mockData];              
              const mockData = data.filter(item => item.id != id); 
              this.setState({mockData}); 
                        
        };  
     
     onChange = (e) =>  this.setState({ [e.target.name]: e.target.value });
     onChange = (e) =>  this.setState({ [e.target.name]: e.target.value });
    render() { 
        return (
            <div className = "container"> 
                <div>
                <h2 className="text-center">Add User</h2>                    
                        <div className="form-group m-2" style ={{width:'50%'}}>
                            <label>Item Name:</label>
                            <input placeholder="Item Name" name="itemName" className="form-control" value={this.state.itemName} onChange={this.onChange}/>
                        </div>    
        <button className="btn btn-success m-2" onClick ={this.add}>{this.state.id ? "Save":"Add"}</button>                                                           
                    
               </div>
                {this.state.mockData.length > 0 && <table className="table table-striped" >  
                <thead style ={{backgroudColor :'grey'}}>
                    <tr>
                        <th>Is Completed</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>  
                        <th>Action</th>                 
                    </tr>
                </thead>                         
                <tbody> 
            {this.state.mockData.map(item => (

                    <tr key ={item.id}>
                    <td><input type="checkbox" defaultChecked={this.state.chkbox} onChange={this.handleChangeChk} /></td>    
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.status}</td>                                                         
                    <td>
                     <button className='btn btn-danger btn-sm m-2' onClick={() =>this.delete(item.id)}>Delete</button>   
                     <button className='btn btn-success' onClick={() =>this.edit(item.id,item.title)}> Edit</button>
                    </td>

                </tr> )
                 )
                 } 
                 </tbody> 
           </table>}
            </div>
            
          );
    }
}
 
export default Todo;