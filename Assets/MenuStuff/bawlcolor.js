#pragma strict

function Start () 
{
	renderer.enabled = false;
	transform.FindChild("TopOfExcl").renderer.enabled = false;
}


function Update () 
{

	
	if(Input.GetKeyDown(KeyCode.R))
	{
	renderer.enabled = true;
	
	 	gameObject.renderer.material.color = Color.red;
	 	//transform.GetChild(0).renderer.material.color = Color.red;
	 	transform.FindChild("TopOfExcl").renderer.material.color = Color.red;
	 	transform.FindChild("TopOfExcl").renderer.enabled = true;
	}


		

		//gameObject.renderer.material.color.a = 1.0f;
}