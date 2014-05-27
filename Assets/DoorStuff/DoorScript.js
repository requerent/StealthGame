#pragma strict

private var open : boolean = false;
private var trigger : boolean = false;
public var doorHeight : float;
private var doorStartHeight: float;

function Start () 
{
	doorStartHeight = transform.position.y;
}

function Update () 
{
	//transform.GetChildCount() == 0; // If Childcount is 1, don't open
							  // If it's Zero, open.

	if(transform.position.y < doorHeight && open)
			transform.position.y += Time.deltaTime *5;

	else if(transform.position.y > doorStartHeight && !open)
			transform.position.y -= Time.deltaTime *5;
			
	if(Input.GetKeyDown(KeyCode.R) && !open && trigger && transform.GetChildCount() == 0)
	{
		open = true;
		//if(transform.position.y < doorHeight)
			//transform.position.y += Time.deltaTime *5;
		Debug.Log("OpenDoor");
		// Open the door
		
	}
	else if(Input.GetKeyDown(KeyCode.R) && open && trigger && transform.GetChildCount() == 0)
	{
		open = false;
		//if(transform.position.y > doorHeight)
		//transform.position.y -= Time.deltaTime;
		// Open the door
	}	
}

function OnTriggerEnter (other : Collider) 
{
	if(other.gameObject.CompareTag("Player"))
	{
		trigger = true;
		Debug.Log("Trigger");
	}
}

	
function OnTriggerExit (other : Collider)
{
	if(other.gameObject.CompareTag("Player") )
	{
		trigger = false;
	}
		
}

// Press Button to open door
	// How do we open the door?
// Press button to close door
// Check to make sure player is in trigger before opening door
// Check to make sure key has been collected before opening door



// Create another boolean to store whether the player is inside or outside of the door
//OnTriggerEnter
	//CompareTag("Player")
//OnTriggerExit
	