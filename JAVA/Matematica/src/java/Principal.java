import java.util.Scanner;

public class Principal {
    
    public static void main (String args[]){
        
    //Define o leitor de teclado
    Scanner leitor = new Scanner(System.in);
    
    //Define as variáveis locais
    int x, y;
    
    //Lê:
    System.out.print("Informe o primeiro valor: ");
    x = leitor.nextInt();
    
    System.out.print("Informe o segundo valor: ");
    y = leitor.nextInt();
    
    //Cria a intância da classe Matematica utilizando o construtor
    Matematica mat = new Matematica(x, y);
    
    //Imprime o resultado das operações através de 
    //chamadasaos métodos da classe Matematica
    System.out.println("--------------------"); //Apenas para organiar a saída
    System.out.println("O valor da soma é: " + mat.soma());
    System.out.println("O valor da subtração é: " + mat.subtrai());
    System.out.println("O valor da multiplicação é: " + mat.multiplica());
    System.out.println("O valor da divisão é: " + mat.divide());
    System.out.println("--------------------"); //Apenas para organiar a saída
    }
    
}
