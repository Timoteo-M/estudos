using Microsoft.Data.SqlClient;
using System.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel;

namespace Exemplo_MVC.Models
{
    public class PessoaModel
    {
        //Campos (banco de dados ) ou atributos desta classe!
        [DisplayName("ID")]
        public int PessoaID { get; set; }
        [DisplayName("Nome")]
        public string PessoaNome { get; set; }
        [DisplayName("Email")]
        public string PessoaEmail { get; set; }
        [DisplayName("Telefone")]
        public string PessoaTel { get; set; }

        //Criar uma CONTANTE para conexao com o banco de dados
        readonly string connectionString = @"Data Source=DESKTOP-HV1ONTQ;Initial Catalog=cadastro_MVC;Integrated Security=True ";

        //Este método salva os dados que vierem do formulário no banco de dados

        public void Salvar()
        {
            using (SqlConnection SqlCon = new SqlConnection(connectionString))
            {
                SqlCon.Open();

                //Criar uma instrução SQL para ser executada no servidor SQL Server.
                SqlCommand SqlComd = new SqlCommand ("insert into tb_pessoa values (@PessoaNome, @PessoaEmail, @PessoaTel)", SqlCon);
                SqlComd.Parameters.AddWithValue("@PessoaNome", PessoaNome);
                SqlComd.Parameters.AddWithValue("@PessoaEmail", PessoaEmail);
                SqlComd.Parameters.AddWithValue("@PessoaTel", PessoaTel);

                //Executar o comando no SQL (Tecla f5 do Sql Server)
                SqlComd.ExecuteNonQuery();

            }
        }
    }
}
