/* Program to demonstrate time taken by function fun() */
#include <bits/stdc++.h>
using namespace std;

// A function that terminates when enter key is pressed
long long int mem[1000][1000][10];
void fun()
{
    printf("fun() starts \n");
    int N = 10000;
    long long int a = 0;
    for (int i = 0; i < 1000; i++)
    {
        for (int j = 0; j < 1000; j++)
        {
            for (int k = 0; k < 10; k++)
            {
                mem[i][j][k] = a++;
            }
        }
    }
    printf("%lld", a);
}

int maaaaa[10000000];
// The main program calls fun() and measures time taken by fun()
int main()
{
    // Calculate the time taken by fun()
    // clock_t t;
    for (int i = 1; i < 10000000; i++)
        maaaaa[i] += maaaaa[i - 1] + 1;
    // t = clock();
    fun();
    // t = clock() - t;
    // double time_taken = ((double)t) / CLOCKS_PER_SEC; // in seconds
    printf("555");
    // printf("fun() took %f seconds to execute \n", time_taken);
    return 0;
}
