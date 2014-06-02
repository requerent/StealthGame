#pragma strict
@script RequireComponent(NavMeshAgent);

enum EnemyStates {PATROL, PURSUIT, INVESTIGATE}


private var agent : NavMeshAgent;
private var target : GameObject;
private var player : GameObject;

public var currentState : EnemyStates;
public var playerLastLocation : GameObject;
public var patrolPointOne : GameObject;
public var patrolPointTwo : GameObject;
public var patrolSpeed : float;
public var pursuitSpeed : float;

function Start () {
	
	player = GameObject.FindGameObjectWithTag("Player");
	
	agent = GetComponent(NavMeshAgent);
	
	currentState = EnemyStates.PATROL;
	
	target = patrolPointOne;
}

function Update () {

	
	agent.SetDestination(target.transform.position);
	
	switch(currentState)
	{
		case EnemyStates.PATROL:
		
		agent.speed = patrolSpeed;
		
		if((transform.position - target.transform.position).magnitude < 1)
		{
			Debug.Log("Patrol point 2");
			target = patrolPointTwo;
		}
		
		if((transform.position - target.transform.position).magnitude < 1)
		{
			target = patrolPointOne;
		}
		
		break;
		
		case EnemyStates.PURSUIT:
		
		target = player;
		
		Debug.Log("Pursuing");
		
		agent.speed = pursuitSpeed;
		
		if((transform.position - target.transform.position).magnitude < 2)
		{
			Application.LoadLevel(0);
		}
		
		if((transform.position - target.transform.position).magnitude > 4)
		{
			currentState = EnemyStates.INVESTIGATE;
		}
		
		break;
		
		case EnemyStates.INVESTIGATE:
		
		target = playerLastLocation;
		
		Debug.Log("Investigate");
		
		if((transform.position - playerLastLocation.transform.position).magnitude < 3)
		{
			target = patrolPointOne;
			currentState = EnemyStates.PATROL;
		}
		
		break;
		
	}

}