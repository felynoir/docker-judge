/* Program to demonstrate time taken by function fun() */
#include <bits/stdc++.h>
using namespace std;

// A function that terminates when enter key is pressed
long long int mem[1000][1000][10];
void fun()
{
    printf("fun() starts \n");
    int N = 10000;
    const long long int MAX = 400000000;
    long long int a = 0;
    // for (int i = 0; i < 1000; i++)
    // {
    //     for (int j = 0; j < 1000; j++)
    //     {
    //         for (int k = 0; k < 10; k++)
    //         {
    //             mem[i][j][k] = a++;
    //         }
    //     }
    // }
    for (long long int i = 0; i < MAX; i++)
    {
        a++;
    }
    printf("%lld", a);
}

// The main program calls fun() and measures time taken by fun()
int main()
{
    // Calculate the time taken by fun()
    clock_t t;
    t = clock();
    fun();
    t = clock() - t;
    double time_taken = ((double)t) / CLOCKS_PER_SEC; // in seconds

    printf("fun() took %f seconds to execute \n", time_taken);
    return 0;
}
