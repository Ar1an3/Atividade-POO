import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Pessoa {
    private String nome;
    private int idade;
    private String email;

    public Pessoa(String nome, int idade, String email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public int getIdade() {
        return idade;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String toString() {
        return "Pessoa [nome=" + nome + ", idade=" + idade + ", email=" + email + "]";
    }
}

public class Main {
    public static void main(String[] args) {
        List<Pessoa> pessoas = new ArrayList<>();
        pessoas.add(new Pessoa("João", 25, "joao@example.com"));
        pessoas.add(new Pessoa("Maria", 40, "maria@example.com"));
        pessoas.add(new Pessoa("Pedro", 32, "pedro@example.com"));
        pessoas.add(new Pessoa("Ana", 28, "ana@example.com"));

        listarPessoasMaisDe30Anos(pessoas);
    }

    public static void listarPessoasMaisDe30Anos(List<Pessoa> pessoas) {
        List<Pessoa> pessoasMaisDe30Anos = new ArrayList<>();

        for (Pessoa pessoa : pessoas) {
            if (pessoa.getIdade() > 30) {
                pessoasMaisDe30Anos.add(pessoa);
            }
        }

        Collections.sort(pessoasMaisDe30Anos, new Comparator<Pessoa>() {
