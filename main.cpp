#include<bits/stdc++.h>
using namespace std;

struct p
{
	int m,a,b;
	bool operator < (const p &t) const
	{
		return t.m<m;
	}
}tmp;

int z[1001][1001],n,x[]={0,0,1,-1},y[]={1,-1,0,0},ans;
bool ch[1001][1001];
priority_queue<p> q;

void find(p P)
{
	int a=P.a,b=P.b,xx,yy;
	ch[a][b]=1;
	for(int i=0;i<4;i++)
	{
		xx=a+x[i],yy=b+y[i];
		if(xx>-1&&yy>-1&&xx<n&&yy<n)
		{
			if(!ch[xx][yy])
			{
				if(z[xx][yy]==0)
				{
					ans=z[a][b];
					return;
				}
					
				else 
				{
					if(z[xx][yy]<z[a][b])
						z[xx][yy]=z[a][b];
					tmp.a=xx,tmp.b=yy,tmp.m=z[xx][yy];
					
					q.push(tmp);
				}
			}
		}
	}
}

int main()
{
	int X,Y;
	scanf("%d",&n);
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<n;j++)
		{
			scanf("%d",&z[i][j]);
			if(z[i][j]==0&&q.empty())
				tmp.a=i,tmp.b=j,tmp.m=0,q.push(tmp);
		}
	}
	
	while(!q.empty())
	{
		tmp=q.top();
		q.pop();
		if(!ch[tmp.a][tmp.b])
		{
			find(tmp);
			if(ans>0)
			{
				printf("%d",ans);
				return 0;
			}
		}
	}
	
}
