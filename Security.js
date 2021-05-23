class Security
{
  constructor()
  {
    
  }
  authenticate(actualcode,enteredcode)
  {
    if(actualcode===enteredcode)
    {
        return true
    }  else 
    {
        return false
    }
  
  }
        
    }
    
