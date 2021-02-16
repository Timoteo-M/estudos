public class Matematica {
    //Atributos locais
    int a, b;
    
    //Construtor da classe, que recebe dois valores (x e y) e atribui
    // aos valores locais (a e b)
    public Matematica(int x, int y){
        a = x;
        b = y;
    }
    //Método de soma
    public int soma(){
        return a + b;
    }
    
    //Método de subtração
    public int subtrai(){
        return a - b;
    }
    
    //Método de multiplicação
    public int multiplica(){
        return a * b;
    }
    
    // Método divisão
    public int divide(){
        return a / b;
    }
}
