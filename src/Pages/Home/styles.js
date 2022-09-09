import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
	
	header{
		width: 50%;
		margin: 84px 0 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		
		img{
			width: 60px;
			height: 60px;
			border-radius: 30px;
			margin-left: 7px;
		}
		div{
   		display: flex;
   		align-items: center;
 		}
		
	}

	input{
   width: 50%;
   padding: 24px;


   background: #e6e6e6;
   border-radius: 5px;
   border: none;

   font-size: 16px;
 }

 
 button{
		width: 50%;
		padding: 24px;
		font-weight: 700;

		background: #ea4c89;
		color: #ffff;

		border-radius: 5px;
		margin: 12px 0 84px;
		border: none;

		cursor: pointer;
		transition: filter 0.2s;
		font-size: 16px;

		&:hover{
   		filter: brightness(0.9);
		}
	}
`