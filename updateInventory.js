/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
  ];
  const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
  ];
  const expected2 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
  ];
  
  const newInv2 = [];
  const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
  const expected3 = [{ name: "Peanut Butter", quantity: 20 }];
  
  const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
  const currInv3 = [];
  const expected4 = [{ name: "Peanut Butter", quantity: 20 }];
  
  /**
   * Updates the current inventory based on the new inventory.
   * - Time: O(?).
   * - Space: O(?).
   * @typedef {Object} Inventory
   * @property {string} Inventory.name The name of the item.
   * @property {number} Inventory.quantity The quantity of the item.
   * @param {Array<Inventory>} newInv A shipment of new inventory.
   *    An array of inventory objects.
   * @param {Array<Inventory>} currInv
   * @return The currInv after being updated.
   */
  function updateInventory(newInv, currInv) {

    for (let i = 0; i < newInv.length; i++) {
        const e = newInv[i];
        let itemInInv = false
        for (let j = 0; j < currInv.length; j++) {
            const f = currInv[j];
            if(e.name == f.name)
            {
                f.quantity += e.quantity
                itemInInv = true
            }
        }
        if(itemInInv === false)
        {
            currInv.push({name: e.name, quantity :e.quantity}) 
        }
    }

    return currInv
  }

  console.log(updateInventory(newInv3, currInv3))



[Unit]
Description=Gunicorn instance
After=network.target
[Service]
User=ubuntu
Group=www-data
WorkingDirectory=/home/ubuntu/MorningSparrow-Trading
Environment="PATH=/home/ubuntu/MorningSparrow-Trading/venv/bin"
ExecStart=/home/ubuntu/MorningSparrow-Trading/venv/bin/gunicorn --workers 3 --bind unix:Trading.sock -m 007 wsgi:application
[Install]
WantedBy=multi-user.target

sudo vim /etc/nginx/sites-available/MorningSparrow-Trading

server {
        listen 80;
        server_name 2600:6c52:7b00:c6ab:9146:dae5:d026:65a;
        location / {
            include proxy_params;
            proxy_pass http://unix:/home/ubuntu/MorningSparrow-Trading/Trading.sock;
        }
    }

sudo ln -s /etc/nginx/sites-available/Trading/etc/nginx/sites-enabled
    
    